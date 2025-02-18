# Blockchain-Based Secure Audit Logging System

## Objective
Create a decentralized, tamper-proof audit logging system to ensure data integrity in cybersecurity investigations.

## Tech Stack
- **Golang**: Develop the audit log service, interact with blockchain, and manage log entries.
- **Blockchain**: Utilize a public or private blockchain to store logs securely.
- **Machine Learning**: Implement anomaly detection algorithms to identify suspicious or potentially fraudulent entries in the logs.

## How it Works
1. **Immutable Logging**: Every action taken on a system (e.g., login, file modification, access request) is logged and stored on the blockchain as an immutable record.
2. **Real-Time Analysis**: ML-based anomaly detection algorithms analyze logs in real-time to spot any irregularities or potential security threats.
3. **Security Assurance**: Ensures that even if an attacker compromises the system, they cannot alter the audit logs, preserving integrity and trust.

## Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/blockchain-audit-logging.git
   cd blockchain-audit-logging
   ```
2. **Install Dependencies**
   ```bash
   go mod tidy
   ```
3. **Run the Application**
   ```bash
   go run main.go
   ```
4. **Deploy Smart Contract (if using Ethereum)**
   ```bash
   truffle migrate --network rinkeby
   ```

## API Endpoints
- `POST /log` - Records an action in the audit log.
- `GET /logs/{id}` - Fetches a specific log entry.
- `GET /anomalies` - Retrieves detected anomalies.

## Contributing
Contributions are welcome! Please submit issues and pull requests.

## License
This project is licensed under the MIT License.

## Acknowledgments
- OpenAI for AI model insights.
- Blockchain communities for decentralized logging solutions.
- Golang developers for robust backend capabilities.





