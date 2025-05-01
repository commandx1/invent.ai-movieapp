const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();

    return Array.from({ length: currentYear - 1899 }, (_, i) => {
        const year = 1900 + i;
        return { value: year.toString(), label: year.toString() };
    }).reverse();
};

export default generateYearOptions;
