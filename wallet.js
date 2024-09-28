const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletAddress = document.getElementById('walletAddress');
const buttonText = document.getElementById('buttonText');
const spinner = document.getElementById('spinner');

// Check if MetaMask is installed
const isMetaMaskInstalled = () => {
  return typeof window.ethereum !== 'undefined';
};

// Function to connect MetaMask wallet
const connectWallet = async () => {
  if (isMetaMaskInstalled()) {
    buttonText.textContent = 'Connecting...';
    spinner.classList.remove('hidden');
    
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      walletAddress.textContent = `Connected: ${accounts[0]}`;
      buttonText.textContent = 'Wallet Connected';
      spinner.classList.add('hidden');
      
      // Change button to disabled state once connected
      connectWalletBtn.disabled = true;
      connectWalletBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      walletAddress.textContent = 'Connection failed. Try again.';
      buttonText.textContent = 'Connect Wallet';
      spinner.classList.add('hidden');
    }
  } else {
    walletAddress.textContent = 'MetaMask is not installed. Please install it.';
  }
};

// Add event listener to button
connectWalletBtn.addEventListener('click', connectWallet);
