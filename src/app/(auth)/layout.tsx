import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full w-full bg-muted lg:flex dark:border-r">
          <Image
            src="./auth.webp"
            alt="auth"
            width={1920} // Define el ancho deseado
            height={1080} // Define la altura deseada
            priority
          />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
