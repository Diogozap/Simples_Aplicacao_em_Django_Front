import { useState, useEffect } from "react";
import api from "../services/api";

function useFetchItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/django");
                setItems(response.data);
            } catch (error) {
                console.error("Erro ao buscar os itens:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { items, loading };
}

export default useFetchItems;
