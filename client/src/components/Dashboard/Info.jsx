import React from "react";

const Info = () => {
  const elmt = [
    { id: "12de", Icon: "", name: "Men", pourcentange: "45%" },
    { id: "12dx", Icon: "", name: "Women", pourcentange: "55%" },
    { id: "1wd2", Icon: "", name: "Total", pourcentange: "", count: 15 },
    { id: "12De", Icon: "", name: "Attendance", pourcentange: "90%" },
  ];
  return (
    <>
      {elmt.map((dashboard) => (
        <div>
          <span className="Icon">Icon</span>
          <div className="informations">
            <h2>{dashboard.name}</h2>
            <div className="count">
              <h3>
                {dashboard.count
                  ? `${dashboard.count} +`
                  : dashboard.pourcentange}
              </h3>
              {dashboard.pourcentange && (
                <div className="progressbar">
                  <div
                    className="pourcentage"
                    style={{ width: dashboard.pourcentange }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
