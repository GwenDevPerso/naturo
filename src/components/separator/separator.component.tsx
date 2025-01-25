import Image from 'next/image';

const Separator = ({
    src,
    position,
    repeat,
    bgSize,
    imageTop,
    imageBottom,
}: {
    src: string;
    position: string;
    repeat: string;
    bgSize: string;
    imageTop?: string;
    imageBottom?: string;
}) => {
    const display = imageTop || imageBottom ? 'block' : 'none';
    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                width: '10%',
                height: '100%',
                backgroundRepeat: repeat,
                backgroundPosition: position,
                backgroundSize: bgSize,
                position: 'relative',
            }}
        >
            <Image
                style={{
                    position: 'absolute',
                    top: imageTop,
                    bottom: imageBottom,
                    display,
                    width: '100%',
                    transform: imageBottom ? 'rotate(180deg)' : undefined,
                }}
                src="/fleurs-jaunes.png"
                alt="next"
                width={100}
                height={100}
            />
        </div>
    );
};

export default Separator;
