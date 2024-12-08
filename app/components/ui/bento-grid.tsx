import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradient-bg";
import { EvervaultCard } from "./vault-card-effect";
import { FlipWords } from "./flip-words";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "p-0 row-span-1 rounded-xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-blue-500/[0.1]",
        className
      )}
      style={{
        background: 'radial-gradient(circle, rgba(63,94,251,0.4) 0%, rgba(96,165,250,0.4) 0%, rgba(255,255,255,0.4) 140%)',
      }}
    >
      {/* For First Cell */}
      <div className={`${id === 1} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">

        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>

        </div>
        {id === 1 && (
          <BackgroundGradientAnimation className="max-h-[100px]">
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName, `group-hover/\
          p-10
            bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex\
            flex-col lg:p10 ${id === 4 || id === 3 ? 'justify-center items-center': ''}`
        )}>
          <div className={`font-sans font-extralight ${id === 1 ? 'text-white' : 'text-black-100'} text-sm md:text-ss lg:text-base z-10\
           dark:text-neutral-300`}>
            {description}
          </div>
          <div className={`font-sans font-bold text-lg ${id === 1 ? 'text-white' : 'text-black-100'} dark:text-neutral-200 lg:text-3xl max-w-96 z-10`}>
            {title}
          </div>

          <div className={'overflow-hidden p-0 m-0 hover:text-white-100'}>
            {id === 2 && <EvervaultCard className={'p-0 mb-0 absolute flex top-0 left-0 w-full min-h-full overflow-hidden'} />}
          </div>
          {id === 3 && (
            <div className="justify-center gap-1 lg:gap-5 mg:gap-0 w-fit">
              <div className="items-center gap-3 md:gap-3 lg:gap-3">
                <div className="relative ">
                  <FlipWords
                    className="text-blue-500/[0.8] text-xl md:text-2xl lg:text-3xl font-sans mt-5 bg-white p-2 rounded-md"
                    words={['SAP S4/HANA', 'Python', 'React.Js']}
                  />
                </div>
              </div>
            </div>
          )}
          {id === 1 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <p className="text-white-100">helloworld</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
