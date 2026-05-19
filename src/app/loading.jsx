import { Spinner } from "@heroui/react";


const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <Spinner size="lg" color="danger" />
        </div>
    );
};

export default loading;