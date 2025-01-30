import "./Card.css";

function roundToK(num) {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
}

export default function Card({ Data, selectFunction }) {
  return (
    <div
      className={`cardContainer ${
        Data.error && "cardBackgroundRed centerElements"
      } ${!Data.item && "centerTitle"}`}
    >
      <h4 className="cardTitle">
        {!Data.item
          ? "Please select a language"
          : Data.error
          ? "Error fetching repositories"
          : Data.item.name.toUpperCase()}
      </h4>
      {Data.item && (
        <>
          {!Data.error && (
            <div className="cardBody">
              <p className="cardDescription">{Data.item.description}</p>
              <div className="repoInfo">
                <div className="repoInfoLanguage">
                  <span className="repoInfoItemTitle material-icons">
                    circle
                  </span>
                  <span className="repoInfoItemValue">
                    {Data.item.language}
                  </span>
                </div>
                <div className="repoInfoItem">
                  <span className="repoInfoItemTitle material-icons">star</span>
                  <span className="repoInfoItemValue">
                    {roundToK(Data.item.stargazers_count)}
                  </span>
                </div>
                <div className="repoInfoItem">
                  <span className="repoInfoItemTitle material-icons">
                    workspaces
                  </span>
                  <span className="repoInfoItemValue">
                    {roundToK(Data.item.forks_count)}
                  </span>
                </div>
                <div className="repoInfoItem">
                  <span className="repoInfoItemTitle material-icons">
                    bug_report
                  </span>
                  <span className="repoInfoItemValue">
                    {roundToK(Data.item.open_issues_count)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <button
            className={`refreshButton material-icons ${Data.error && "retry"}`}
            onClick={() => selectFunction(Data.item.language)}
          >
            {!Data.error ? "refresh" : "restart_alt"}
          </button>
        </>
      )}
    </div>
  );
}
