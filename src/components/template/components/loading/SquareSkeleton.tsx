import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAppData from '../../../../data/hook/useAppData';

interface SquareSkeletonProps {
    height: number,
}

export default function SquareSkeleton (props: SquareSkeletonProps) {
    const {theme} = useAppData();

    return (
        <SkeletonTheme baseColor={theme === 'dark' ? '#232a38' : '#d3d3d3'} highlightColor={theme === 'dark' ? '#2f384a' : '#c9c9c9'}>
            <div>
                <Skeleton height={props.height} />
            </div>
        </SkeletonTheme>
    )
}