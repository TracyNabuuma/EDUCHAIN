// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title EduChain
 * @dev Main contract for educational credentials on blockchain
 */
contract EduChain {
    // ==================== State Variables ====================
    
    // Contract owner (educational institution admin)
    address public owner;
    
    // Credential data structure
    struct Credential {
        string id;              // Unique credential identifier
        address studentWallet;  // Student wallet address
        string metadata;        // Metadata URI (IPFS hash containing certificate details)
        uint256 issueDate;      // Timestamp when issued
        uint256 expiryDate;     // Optional expiry date (0 if no expiry)
        bool isRevoked;         // Whether credential has been revoked
    }
    
    // Institution data structure
    struct Institution {
        string name;            // Name of institution
        string metadata;        // Metadata URI (IPFS hash containing institution details)
        bool isActive;          // Whether institution is active
        uint256 createdAt;      // Timestamp when created
    }
    
    // Mapping from credential ID to Credential
    mapping(string => Credential) public credentials;
    
    // Mapping from institution address to Institution
    mapping(address => Institution) public institutions;
    
    // Mapping from student wallet to their credential IDs
    mapping(address => string[]) public studentCredentials;
    
    // Array of all registered institutions
    address[] public registeredInstitutions;
    
    // ==================== Events ====================
    
    event CredentialIssued(
        string credentialId,
        address indexed studentWallet,
        address indexed institution,
        uint256 timestamp
    );
    
    event CredentialRevoked(
        string credentialId,
        address indexed institution,
        uint256 timestamp
    );
    
    event InstitutionRegistered(
        address indexed institution,
        string name,
        uint256 timestamp
    );
    
    event InstitutionStatusChanged(
        address indexed institution,
        bool isActive,
        uint256 timestamp
    );
    
    // ==================== Modifiers ====================
    
    modifier onlyOwner() {
        require(msg.sender == owner, "EduChain: Caller is not the owner");
        _;
    }
    
    modifier onlyActiveInstitution() {
        require(institutions[msg.sender].isActive, "EduChain: Institution not active");
        _;
    }
    
    // ==================== Constructor ====================
    
    constructor() {
        owner = msg.sender;
    }
    
    // ==================== External Functions ====================
    
    /**
     * @dev Register a new educational institution
     * @param name Name of the institution
     * @param metadata IPFS hash containing institution details
     */
    function registerInstitution(string memory name, string memory metadata) external onlyOwner {
        require(institutions[msg.sender].createdAt == 0, "EduChain: Institution already registered");
        
        Institution memory newInstitution = Institution({
            name: name,
            metadata: metadata,
            isActive: true,
            createdAt: block.timestamp
        });
        
        institutions[msg.sender] = newInstitution;
        registeredInstitutions.push(msg.sender);
        
        emit InstitutionRegistered(msg.sender, name, block.timestamp);
    }
    
    /**
     * @dev Set activation status of an institution
     * @param institution Address of the institution
     * @param isActive New status
     */
    function setInstitutionStatus(address institution, bool isActive) external onlyOwner {
        require(institutions[institution].createdAt > 0, "EduChain: Institution not registered");
        institutions[institution].isActive = isActive;
        
        emit InstitutionStatusChanged(institution, isActive, block.timestamp);
    }
    
    /**
     * @dev Issue a new academic credential
     * @param credentialId Unique identifier for the credential
     * @param studentWallet Wallet address of the student
     * @param metadata IPFS hash containing credential details
     * @param expiryDate Expiry date (0 if no expiry)
     */
    function issueCredential(
        string memory credentialId,
        address studentWallet,
        string memory metadata,
        uint256 expiryDate
    ) external onlyActiveInstitution {
        require(bytes(credentials[credentialId].id).length == 0, "EduChain: Credential ID already exists");
        
        Credential memory newCredential = Credential({
            id: credentialId,
            studentWallet: studentWallet,
            metadata: metadata,
            issueDate: block.timestamp,
            expiryDate: expiryDate,
            isRevoked: false
        });
        
        credentials[credentialId] = newCredential;
        studentCredentials[studentWallet].push(credentialId);
        
        emit CredentialIssued(credentialId, studentWallet, msg.sender, block.timestamp);
    }
    
    /**
     * @dev Revoke an existing credential
     * @param credentialId Unique identifier for the credential
     */
    function revokeCredential(string memory credentialId) external onlyActiveInstitution {
        require(bytes(credentials[credentialId].id).length > 0, "EduChain: Credential does not exist");
        require(!credentials[credentialId].isRevoked, "EduChain: Credential already revoked");
        
        credentials[credentialId].isRevoked = true;
        
        emit CredentialRevoked(credentialId, msg.sender, block.timestamp);
    }
    
    /**
     * @dev Update credential metadata
     * @param credentialId Unique identifier for the credential
     * @param newMetadata New IPFS hash containing updated credential details
     */
    function updateCredentialMetadata(string memory credentialId, string memory newMetadata) 
        external onlyActiveInstitution {
        require(bytes(credentials[credentialId].id).length > 0, "EduChain: Credential does not exist");
        require(!credentials[credentialId].isRevoked, "EduChain: Cannot update revoked credential");
        
        credentials[credentialId].metadata = newMetadata;
    }
    
    // ==================== View Functions ====================
    
    /**
     * @dev Verify a credential
     * @param credentialId Unique identifier for the credential
     * @return isValid Whether the credential is valid
     * @return studentWallet Wallet address of the student
     * @return metadata IPFS hash containing credential details
     * @return issueDate Timestamp when issued
     * @return expiryDate Expiry date (0 if no expiry)
     */
    function verifyCredential(string memory credentialId) 
        external view 
        returns (bool isValid, address studentWallet, string memory metadata, uint256 issueDate, uint256 expiryDate) {
        Credential memory credential = credentials[credentialId];
        
        bool _isValid = bytes(credential.id).length > 0 && 
                        !credential.isRevoked &&
                        (credential.expiryDate == 0 || credential.expiryDate > block.timestamp);
                        
        return (
            _isValid,
            credential.studentWallet,
            credential.metadata,
            credential.issueDate,
            credential.expiryDate
        );
    }
    
    /**
     * @dev Get all credentials for a student
     * @param studentWallet Wallet address of the student
     * @return Array of credential IDs
     */
    function getStudentCredentials(address studentWallet) external view returns (string[] memory) {
        return studentCredentials[studentWallet];
    }
    
    /**
     * @dev Get the number of registered institutions
     * @return Number of institutions
     */
    function getInstitutionCount() external view returns (uint256) {
        return registeredInstitutions.length;
    }
}