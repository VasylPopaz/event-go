import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EventsList } from "../components";

import { getEvents } from "../api";
import { IEvent } from "../types";
import { Sort } from "../components/Sort/Sort";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  // const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [totalEvents, setTotalEvents] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.documentElement.scrollHeight -
          (window.scrollY + window.innerHeight) <
          100 &&
        events.length < totalEvents
      ) {
        setIsFetching(true);
      }
    };

    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [events.length, totalEvents]);

  useEffect(() => {
    if (isFetching) {
      getEvents(page, "")
        .then((res) => {
          setEvents([...events, ...res.events]);
          setTotalEvents(res.totalEvents);
          setPage((prev) => prev + 1);
          const isMoreEvents = page < Math.ceil(res.totalEvents / 9);
          if (!isMoreEvents) {
            toast.info(
              `We’re sorry, but you’ve reached the end of the event list.`
            );
          }
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        })
        .finally(() => setIsFetching(false));
    }
  }, [events, isFetching, page, totalEvents]);

  const handleChangeSort = (option: string) => {
    console.log(option);
    // setSortBy(option);
    // getEvents(page, option).then((res) =>
    //   setEvents([...events, ...res.events])
    // );
  };

  return (
    <section className="container py-[40px]">
      <Sort onChange={handleChangeSort} />
      <EventsList events={events} />
    </section>
  );
};
export default EventsBoard;
