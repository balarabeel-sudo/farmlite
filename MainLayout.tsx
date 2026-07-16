import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        backgroundColor: "#F8FAF8",
        minHeight: "100vh",
        color: "#1F2937",
      }}
    >
      {children}
    </div>
  );
}

export default MainLayout;
