//  Subordinate to parental css

const PortfolioButton = () => {
  const cvLink = "https://drive.google.com/file/d/1Cgcf4ttnGGQdhV4SUqwXwG0ipzZ_EGxX/view?usp=sharing";


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