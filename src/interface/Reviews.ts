export interface ReviewProps {
    name: string;
    date: string;
    text: string;
    photo: { // Adjusted to match the incoming data
        id: number; // Include the id if needed
        url: string;
    };
    orderNum: number; // Include this if needed based on your data structure
}
