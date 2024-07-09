import React, { useEffect, useState } from 'react';
import fetchRouteById from '../utils/fetchRouteById';

interface Cluster {
    name: string;
    description: string;
    technicalLevelName: string;
}

interface ClusterCardProps {
    routeId: number;
}

const ClusterCard: React.FC<ClusterCardProps> = ({ routeId }) => {
    const [clusters, setClusters] = useState<Cluster[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchRouteById(routeId);
                const data = await response.json();
                console.log(data);  // Log the data to verify the structure

                if (Array.isArray(data.clusters)) {
                    setClusters(data.clusters);
                } else {
                    throw new Error('Data format error: clusters field is missing or not an array');
                }
            } catch (error) {
                setError('Error fetching route data');
                console.error('Error fetching route data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [routeId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {clusters.map((cluster, index) => (
                <div key={index} className="cluster-card">
                    <h2>{cluster.name}</h2>
                    <p>{cluster.description}</p>
                    <p><strong>Technical Level:</strong> {cluster.technicalLevelName}</p>
                </div>
            ))}
        </div>
    );
};

export default ClusterCard;
