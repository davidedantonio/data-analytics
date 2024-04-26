import { HashtagIcon } from "@heroicons/react/solid";

const goals = [
  {
    name: "Scopriremo i fattori distintivi tra Data Analytics, Data Science e Data Engineering",
    icon: HashtagIcon,
  },
  {
    name: "Demistifica il modo in cui i dati passano dalla raccolta all'analisi e quali persone, processi e tecnologie sono coinvolti.",
    icon: HashtagIcon,
  },
  {
    name: "Il contesto fornisce a ognuno di noi le basi di cui abbiamo bisogno per pensare ai dati in modo più significativo e conoscerli meglio.",
    icon: HashtagIcon,
  },
  {
    name: "Il mondo dei dati è enorme, ma ciò non significa che debba essere complicato.",
    icon: HashtagIcon,
  },
  {
    name: "Scopriremo i principali strumenti per la manipolazione dei dati: quali sono i più popolari, come interagiscono e perché alcuni sono preferiti rispetto ad altri.",
    icon: HashtagIcon,
  },
];

function Goals() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {goals.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Goals;
