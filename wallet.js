const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletAddress = document.getElementById('walletAddress');

// Check if MetaMask is installed
const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== 'undefined';
};

// Function to connect MetaMask wallet
const connectWallet = async () => {
  if (isMetaMaskInstalled()) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      walletAddress.textContent = `Connected: ${accounts[0]}`;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      walletAddress.textContent = 'Connection failed. Try again.';
    }
  } else {
    walletAddress.textContent = 'MetaMask is not installed. Please install it.';
  }
};

// Add event listener to button
connectWalletBtn.addEventListener('click', connectWallet);
