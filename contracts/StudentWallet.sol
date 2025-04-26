// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title StudentWallet
 * @dev Contract to manage student wallets and identifiers
 */
contract StudentWallet {
    // ==================== State Variables ====================
    
    // Main EduChain contract address
    address public eduChainAddress;
    
    // Struct to store student information
    struct Student {
        string id;              // Student ID in institution system
        string name;            // Student name
        string email;           // Student email
        string metadata;        // Additional metadata URI (IPFS hash)
        uint256 registeredAt;   // Registration timestamp
        bool exists;            // Whether this wallet has been registered
    }
    
    // Mapping from wallet address to Student
    mapping(address => Student) public students;
    
    // Mapping from institution-specific ID to wallet address
    mapping(string => address) public idToWallet;
    
    // Array of all registered student wallets
    address[] public registeredWallets;
    
    // ==================== Events ====================
    
    event StudentRegistered(
        address indexed wallet,
        string id,
        string name,
        uint256 timestamp
    );
    
    event StudentUpdated(
        address indexed wallet,
        string id,
        string name,
        uint256 timestamp
    );
    
    // ==================== Modifiers ====================
    
    modifier onlyEduChain() {
        require(msg.sender == eduChainAddress, "StudentWallet: Caller is not EduChain contract");
        _;
    }
    
    // ==================== Constructor ====================
    
    constructor(address _eduChainAddress) {
        eduChainAddress = _eduChainAddress;
    }
    
    // ==================== External Functions ====================
    
    /**
     * @dev Register a new student wallet
     * @param wallet Wallet address for the student
     * @param id Student ID in institution system
     * @param name Student name
     * @param email Student email
     * @param metadata Additional metadata URI (IPFS hash)
     */
    function registerStudent(
        address wallet,
        string memory id,
        string memory name,
        string memory email,
        string memory metadata
    ) external onlyEduChain {
        require(!students[wallet].exists, "StudentWallet: Wallet already registered");
        require(idToWallet[id] == address(0), "StudentWallet: Student ID already registered");
        
        Student memory newStudent = Student({
            id: id,
            name: name,
            email: email,
            metadata: metadata,
            registeredAt: block.timestamp,
            exists: true
        });
        
        students[wallet] = newStudent;
        idToWallet[id] = wallet;
        registeredWallets.push(wallet);
        
        emit StudentRegistered(wallet, id, name, block.timestamp);
    }
    
    /**
     * @dev Update student information
     * @param wallet Wallet address for the student
     * @param name New student name
     * @param email New student email
     * @param metadata New metadata URI
     */
    function updateStudent(
        address wallet,
        string memory name,
        string memory email,
        string memory metadata
    ) external onlyEduChain {
        require(students[wallet].exists, "StudentWallet: Wallet not registered");
        
        students[wallet].name = name;
        students[wallet].email = email;
        students[wallet].metadata = metadata;
        
        emit StudentUpdated(wallet, students[wallet].id, name, block.timestamp);
    }
    
    // ==================== View Functions ====================
    
    /**
     * @dev Check if a wallet is registered
     * @param wallet Wallet address to check
     * @return Whether the wallet is registered
     */
    function isRegistered(address wallet) external view returns (bool) {
        return students[wallet].exists;
    }
    
    /**
     * @dev Get student information by wallet
     * @param wallet Wallet address of the student
     * @return id Student ID
     * @return name Student name
     * @return email Student email
     * @return metadata Additional metadata URI
     * @return registeredAt Registration timestamp
     */
    function getStudentByWallet(address wallet) 
        external view 
        returns (string memory id, string memory name, string memory email, string memory metadata, uint256 registeredAt) {
        require(students[wallet].exists, "StudentWallet: Wallet not registered");
        Student memory student = students[wallet];
        
        return (
            student.id,
            student.name,
            student.email,
            student.metadata,
            student.registeredAt
        );
    }
    
    /**
     * @dev Get student information by ID
     * @param id Student ID in institution system
     * @return wallet Wallet address
     * @return name Student name
     * @return email Student email
     * @return metadata Additional metadata URI
     * @return registeredAt Registration timestamp
     */
    function getStudentById(string memory id) 
        external view 
        returns (address wallet, string memory name, string memory email, string memory metadata, uint256 registeredAt) {
        address studentWallet = idToWallet[id];
        require(studentWallet != address(0), "StudentWallet: No wallet for this ID");
        Student memory student = students[studentWallet];
        
        return (
            studentWallet,
            student.name,
            student.email,
            student.metadata,
            student.registeredAt
        );
    }
    
    /**
     * @dev Get the number of registered wallets
     * @return Number of registered student wallets
     */
    function getStudentCount() external view returns (uint256) {
        return registeredWallets.length;
    }
}