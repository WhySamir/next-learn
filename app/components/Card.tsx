export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-24 m-2.5 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] border border-#ddd flex justify-center items-center">
      {children}
    </div>
  );
};
