// Maybe this will be useful 😉
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const defaultFilterFn = () => true;
const defaultActionFn = (wagon) => console.log(`${wagon.emoji} ${wagon.name}`);

export const iterateWagons = (start, actionFn, filterFn) => {
  // pass the locomotive as the first wagon
  let wagon = start;

  // iterate over the wagons
  while (wagon) {
    // if actionfn is undefined, use the default action function
    if (!actionFn) {
      actionFn = defaultActionFn;
    }

    // if filterfn is undefined, use the default filter function
    if (!filterFn) {
      filterFn = defaultFilterFn;
    }

    // if the wagon passes the filter, execute the action function
    if (filterFn(wagon)) {
      actionFn(wagon);
    }

    // move to the next wagon
    wagon = wagon.next;
  }
};

export const filterOldBreaks = (wagon) => {
  // check if the break is older than a year compared to today
  const breakDate = new Date(wagon.lastBreakRevision).getTime();
  const today = new Date().getTime();

  const differenceInDays = (today - breakDate) / DAY_IN_MILLISECONDS;

  return differenceInDays > 365;
};
