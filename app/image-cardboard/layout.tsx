//parallel intercepting route
//first loads image-cardboard next js renders both the modal route which starts empty due to default tsx and children
//when clicked an img modal route intercepts the navigation to /image-cardboard/id
const layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div className="relative">
      {children}
      {/*  only render when an intercepted route is active */}
      {modal}
    </div>
  );
};

export default layout;
