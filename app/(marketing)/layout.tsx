import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="pt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
