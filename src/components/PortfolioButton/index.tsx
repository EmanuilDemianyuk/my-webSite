//  Subordinate to parental css

const PortfolioButton = () => {
  const cvLink = "https://drive.google.com/file/d/1Y60AktQwWt4P0CHIcVwehOyrPXu-8U1X/view?usp=sharing";
  
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