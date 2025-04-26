// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title CredentialStorage
 * @dev Contract for storing and retrieving credential metadata
 */
contract CredentialStorage {
    // ==================== State Variables ====================
    
    // Main EduChain contract address
    address public eduChainAddress;
    
    // Credential metadata structure
    struct CredentialMetadata {
        string name;            // Certificate name
        string description;     // Description
        string issuerName;      // Name of issuing institution
        string achievementType; // Type of achievement
        string criteria;        // Criteria for earning the credential
        string[] skills;        // Skills demonstrated
        bytes32 documentHash;   // Hash of the actual document
        bool exists;            // Whether this metadata exists
    }
    
    // Mapping from credential hash to metadata
    mapping(bytes32 => CredentialMetadata) public credentialMetadata;
    
    // Array of all credential hashes
    bytes32[] public allCredentialHashes;
    
    // ==================== Events ====================
    
    event MetadataStored(
        bytes32 indexed credentialHash,
        string name,
        string issuerName,
        uint256 timestamp
    );
    
    event MetadataUpdated(
        bytes32 indexed credentialHash,
        uint256 timestamp
    );
    
    // ==================== Modifiers ====================
    
    modifier onlyEduChain() {
        require(msg.sender == eduChainAddress, "CredentialStorage: Caller is not EduChain contract");
        _;
    }
    
    // ==================== Constructor ====================
    
    constructor(address _eduChainAddress) {
        eduChainAddress = _eduChainAddress;
    }
    
    // ==================== External Functions ====================
    
    /**
     * @dev Store metadata for a credential
     * @param credentialHash Hash of the credential
     * @param name Certificate name
     * @param description Description
     * @param issuerName Name of issuing institution
     * @param achievementType Type of achievement
     * @param criteria Criteria for earning the credential
     * @param skills Skills demonstrated
     * @param documentHash Hash of the actual document
     */
    function storeMetadata(
        bytes32 credentialHash,
        string memory name,
        string memory description,
        string memory issuerName,
        string memory achievementType,
        string memory criteria,
        string[] memory skills,
        bytes32 documentHash
    ) external onlyEduChain {
        require(!credentialMetadata[credentialHash].exists, "CredentialStorage: Metadata already exists");
        
        CredentialMetadata memory metadata = CredentialMetadata({
            name: name,
            description: description,
            issuerName: issuerName,
            achievementType: achievementType,
            criteria: criteria,
            skills: skills,
            documentHash: documentHash,
            exists: true
        });
        
        credentialMetadata[credentialHash] = metadata;
        allCredentialHashes.push(credentialHash);
        
        emit MetadataStored(credentialHash, name, issuerName, block.timestamp);
    }
    
    /**
     * @dev Update existing credential metadata
     * @param credentialHash Hash of the credential
     * @param name New certificate name
     * @param description New description
     * @param achievementType New type of achievement
     * @param criteria New criteria
     * @param skills New skills
     * @param documentHash New document hash
     */
    function updateMetadata(
        bytes32 credentialHash,
        string memory name,
        string memory description,
        string memory achievementType,
        string memory criteria,
        string[] memory skills,
        bytes32 documentHash
    ) external onlyEduChain {
        require(credentialMetadata[credentialHash].exists, "CredentialStorage: Metadata does not exist");
        
        CredentialMetadata storage metadata = credentialMetadata[credentialHash];
        metadata.name = name;
        metadata.description = description;
        metadata.achievementType = achievementType;
        metadata.criteria = criteria;
        metadata.skills = skills;
        metadata.documentHash = documentHash;
        
        emit MetadataUpdated(credentialHash, block.timestamp);
    }
    
    // ==================== View Functions ====================
    
    /**
     * @dev Get metadata for a credential
     * @param credentialHash Hash of the credential
     * @return name Certificate name
     * @return description Description
     * @return issuerName Name of issuing institution
     * @return achievementType Type of achievement
     * @return criteria Criteria for earning the credential
     * @return documentHash Hash of the actual document
     */
    function getMetadata(bytes32 credentialHash) 
        external view 
        returns (
            string memory name,
            string memory description,
            string memory issuerName,
            string memory achievementType,
            string memory criteria,
            bytes32 documentHash
        ) {
        require(credentialMetadata[credentialHash].exists, "CredentialStorage: Metadata does not exist");
        CredentialMetadata storage metadata = credentialMetadata[credentialHash];
        
        return (
            metadata.name,
            metadata.description,
            metadata.issuerName,
            metadata.achievementType,
            metadata.criteria,
            metadata.documentHash
        );
    }
    
    /**
     * @dev Get skills for a credential
     * @param credentialHash Hash of the credential
     * @return Array of skills
     */
    function getSkills(bytes32 credentialHash) external view returns (string[] memory) {
        require(credentialMetadata[credentialHash].exists, "CredentialStorage: Metadata does not exist");
        return credentialMetadata[credentialHash].skills;
    }
    
    /**
     * @dev Check if metadata exists for a credential
     * @param credentialHash Hash of the credential
     * @return Whether metadata exists
     */
    function metadataExists(bytes32 credentialHash) external view returns (bool) {
        return credentialMetadata[credentialHash].exists;
    }
    
    /**
     * @dev Get the number of stored credentials
     * @return Number of credential metadata entries
     */
    function getCredentialCount() external view returns (uint256) {
        return allCredentialHashes.length;
    }
}