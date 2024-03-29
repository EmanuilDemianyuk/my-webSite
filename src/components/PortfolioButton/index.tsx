//  Subordinate to parental css

const PortfolioButton = () => {
  const cvLink = "https://drive.google.com/file/d/1DjFNwJ_9b9MF_bnfK0_6U5vAkDewiGaz/view?usp=sharing";
  
  const openPortfolio = () => {
    window.open(cvLink, '_blank');
  };
  return (
    <>
        <button onClick={openPortfolio}>
                VIEW MY PORTFOLIO
        </button>
    </>
  )
}

export default PortfolioButton;