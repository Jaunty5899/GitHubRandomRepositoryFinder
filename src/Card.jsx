import "./Card.css";

function roundToK(num) {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
}

export default function Card({ Data, selectFunction }) {
  return (
    <div className="cardContainer">
      <h4 className="cardTitle">
        {!Data ? "Please select a language" : Data.name.toUpperCase()}
      </h4>
      {Data && (
        <>
          <p className="cardDescription">{Data.description}</p>
          <div className="repoInfo">
            <div className="repoInfoLanguage">
              <span className="repoInfoItemTitle material-icons">circle</span>
              <span className="repoInfoItemValue">{Data.language}</span>
            </div>
            <div className="repoInfoItem">
              <span className="repoInfoItemTitle material-icons">star</span>
              <span className="repoInfoItemValue">
                {roundToK(Data.stargazers_count)}
              </span>
            </div>
            <div className="repoInfoItem">
              <span className="repoInfoItemTitle material-icons">
                workspaces
              </span>
              <span className="repoInfoItemValue">
                {roundToK(Data.forks_count)}
              </span>
            </div>
            <div className="repoInfoItem">
              <span className="repoInfoItemTitle material-icons">
                bug_report
              </span>
              <span className="repoInfoItemValue">
                {roundToK(Data.open_issues_count)}
              </span>
            </div>
          </div>
          <button
            className="refreshButton material-icons"
            onClick={() => selectFunction(Data.language)}
          >
            refresh
          </button>
        </>
      )}
    </div>
  );
}
