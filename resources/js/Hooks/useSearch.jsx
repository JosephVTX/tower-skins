import { router } from "@inertiajs/react";
import { useDebounce } from "primereact/hooks";
import { useEffect } from "react";

export default function useSearch(routeValue, key = "search", delay = 1000) {
    const [inputValue, debouncedValue, setInputValue] = useDebounce(null, delay);

    useEffect(() => {
        if (debouncedValue)
            router.replace(
                route(routeValue, {
                    [key]: debouncedValue,
                })
            );

        if (debouncedValue == "") router.replace(route(routeValue));
    }, [debouncedValue]);

    return {
        inputValue,
        setInputValue,
    };
}
