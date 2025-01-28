import "./Card.css";

export default function Card({ Data }) {
  return (
    <div className="cardContainer">
      <h3 className="cardTitle">
        {!Data ? "Please select a language" : Data.name.toUpperCase()}
      </h3>
      <p className="cardDescription">{Data.description}</p>
      <div className="repoInfo">
        <div className="repoInfoLanguage">
          <span className="repoInfoItemTitle material-icons">circle</span>
          <span className="repoInfoItemValue">{Data.language}</span>
        </div>
        <div className="repoInfoItem">
          <span className="repoInfoItemTitle material-icons">star</span>
          <span className="repoInfoItemValue">
            {Data.stargazers_count > 999
              ? (Data.stargazers_count / 1000).toFixed(1) + "k"
              : Data.stargazers_count}
          </span>
        </div>
        <div className="repoInfoItem">
          <span className="repoInfoItemTitle material-icons">workspaces</span>
          <span className="repoInfoItemValue">
            {Data.forks_count > 999
              ? (Data.forks_count / 1000).toFixed(1) + "k"
              : Data.forks_count}
          </span>
        </div>
        <div className="repoInfoItem">
          <span className="repoInfoItemTitle material-icons">bug_report</span>
          <span className="repoInfoItemValue">
            {Data.open_issues_count > 999
              ? (Data.open_issues_count / 1000).toFixed(1) + "k"
              : Data.open_issues_count}
          </span>
        </div>
      </div>
    </div>
  );
}
