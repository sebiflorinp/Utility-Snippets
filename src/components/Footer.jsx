function Footer(){
  return(
    <div className="containerFooter">
      <p className="textFooter">I am an independent and not so experienced dev so rolling out updates might take some time</p>
      <div className="containerContacte">
        <p className="textFooter">Where you can find me:</p>
        <a href="https://github.com/sebiflorinp" target="blank">
          <div className="containerGitHub">
            <img className="icon iconGit" src="../../images/gitIcon.png" alt="gitIcon" />
            <p className="textFooter">sebiflorinp</p>
          </div>
        </a>
        <div className="containerDiscord">
          <img className="icon iconDiscord" src="../../images/discordIcon.png" alt="discordIcon" />
          <p className="textFooter">sebiflorinp#1863</p>
        </div>
      </div>
    </div>
  )
}

export default Footer