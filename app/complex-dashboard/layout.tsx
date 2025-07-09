import { Suspense } from "react";

const layout = ({
  children,
  UserAnalytics,
  Notification,
  Revenue,
  login,
}: {
  children: React.ReactNode;
  UserAnalytics: React.ReactNode;
  Notification: React.ReactNode;
  Revenue: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogin = true;

  return isLogin ? (
    <>
      <div> {children}</div>
      {/* parallelRoutes@folder: independent route like loading in one compponent doesn''t affect other and subnavigation */}
      {/* indpenedent route handling: fetching useranalytics loading but revenue appear */}
      {/* subnavigation:notification/archived */}
      <div className="flex">
        <div className="flex-col flex">
          <Suspense fallback={<p>Loading UserAnalaytics</p>}>
            {" "}
            {UserAnalytics}
          </Suspense>

          <Suspense fallback={<p>Loading Revenue</p>}>{Revenue}</Suspense>
        </div>
        {Notification}
      </div>
    </>
  ) : (
    <>{login}</>
  );
};

export default layout;
