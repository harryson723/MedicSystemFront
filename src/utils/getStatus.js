const getStatus = status => {
    if (status == "AVAILABLE") return "DISPONIBLE"
    if (status == "DISABLE") return "NO DISPONIBLE"
};

export default getStatus;