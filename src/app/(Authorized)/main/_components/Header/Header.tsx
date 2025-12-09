import Container from "@/src/app/components/wrappers/container";

export const Header = () => {
  return (
    <div className="relative h-150 w-full bg-[url('/images/header-background.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/30 before:z-0">
      <Container className="h-full flex items-center">
        <div className="max-w-fit pt-4 max-h-fit relative z-10">
          <h1 className="text-white text-6xl font-semibold p-4">
            Mandarin Tədris Mərkəzi
          </h1>
          <h2 className="text-white text-4xl p-4 text-center">
            Çin dili biliyi, karyera səmərəliliyi!
          </h2>
        </div>
      </Container>
    </div>
  );
};
