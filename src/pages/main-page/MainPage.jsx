import React, { useEffect, useState } from 'react';
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Loader } from '@consta/uikit/Loader';

import './MainPage.css';

const SERVICES_URL = "https://673423afa042ab85d1190055.mockapi.io/api/v1/main";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(SERVICES_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
          <div className="loader">
            <Loader size="m" />
          </div>
        );
    }

    if (error) {
        return <Text view="alert" size="l">Error: {error}</Text>;
    }

    return (
        <div>
            {data.map((card, index) => (
                <Card key={index} verticalSpace="m" horizontalSpace="xl" form="round" className="rounded-card-main">
                    <Text size="m" weight="bold">{card.name}</Text>
                    <Text>{card.description}</Text>
                    <div className="card-footer">
                        <Text size="s" weight="regular" view="secondary">
                            {card.createdAt}
                        </Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default MainPage;
