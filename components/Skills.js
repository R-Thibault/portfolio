import Image from "next/image";

export function Skills() {
  return (
    <>
      <div className="flex flex-col gap-5 space-y-2 w-full">
        <h3 className="text-2xl font-bold text-center text-white">Langages</h3>
        <div className="flex justify-evenly flex-wrap">
          <Image src="/html-logo.png" alt="html" width={60} height={50} />
          <Image src="/css-logo.png" alt="css" width={80} height={50} />
          <Image src="/js-logo.png" alt="js" width={60} height={50} />
          <Image src="/wp-logo.png" alt="wordpress" width={70} height={50} />
          <Image src="/php-logo.png" alt="php" width={70} height={50} />
          <Image src="/sql-logo.png" alt="sql" width={80} height={30} />
        </div>
        <div className="flex flex-col gap-5 space-y-2 w-full">
          <h3 className="text-2xl font-bold text-center text-white">
            Frameworks
          </h3>
          <div className="flex justify-evenly ">
            <Image src="/react-logo.png" alt="react" width={50} height={50} />
            <Image src="/next-logo.png" alt="next" width={50} height={50} />
            <Image
              src="/bootstrap-logo.png"
              alt="boostrap"
              width={50}
              height={50}
            />
            <Image
              src="/tailwind-logo.png"
              alt="tailwind"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col gap-5 space-y-2 w-full">
            <h3 className="text-2xl font-bold text-center text-white">
              Outils
            </h3>
            <div className="flex justify-evenly">
              <Image
                src="/github-mark.png"
                alt="github"
                width={50}
                height={50}
              />
              <Image
                src="/vscode-logo.png"
                alt="vscode"
                width={50}
                height={50}
              />
              <Image src="/figma-logo.png" alt="figma" width={80} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
