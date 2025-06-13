export interface TextFieldProps {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}