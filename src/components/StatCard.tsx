
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type StatCardProps = {
    title: string;
    value: string | number;
};

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <Card className="bg-card-bg w-full">
            <CardHeader>
                <CardTitle className="font-extrabold text-text-primary">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="font-bold text-text-secondary">
                    {value}
                </p>
            </CardContent>
        </Card>
    );
}