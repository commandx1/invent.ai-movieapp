import React, { ReactNode, useEffect, useRef, useState } from 'react';

import ArrowDown from '@mui/icons-material/ArrowDownward';
import Remove from '@mui/icons-material/Cancel';

import styles from './selectbox.module.scss';

type Option = {
    label: string | ReactNode;
    value: string | number;
};

type Props = {
    options: Option[];
    value: string | number;
    onChange: (_value: string | number) => void;
    placeholder?: string;
    className?: string;
    allowClear?: boolean;
};

const SelectBox: React.FC<Props> = ({ options, value, onChange, placeholder, className = '', allowClear }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selectedLabel = options.find(opt => opt.value === value)?.label;

    const onClear = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        onChange('');
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`${styles.select} ${className}`} ref={ref}>
            <div
                className={[styles.trigger, isOpen && styles.open].filter(Boolean).join(' ')}
                onClick={() => setIsOpen(prev => !prev)}>
                <div style={{ color: '#757575', display: 'flex', alignItems: 'center', gap: 8 }}>
                    {selectedLabel || placeholder}
                    {!!selectedLabel && allowClear && <Remove onClick={onClear} />}
                </div>

                <ArrowDown className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`} />
            </div>
            <div className={[styles.options, isOpen && styles.open].filter(Boolean).join(' ')}>
                {options.map(opt => (
                    <div
                        key={opt.value}
                        className={`${styles.option} ${opt.value === value ? styles.selected : ''}`}
                        onClick={() => {
                            onChange(opt.value);
                            setIsOpen(false);
                        }}>
                        {opt.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectBox;
