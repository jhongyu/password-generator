import * as SliderComponent from '@radix-ui/react-slider';
import './Slider.css';

interface SliderProps {
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
}

function Slider({ value, onChange, min, max }: SliderProps) {
  return (
    <SliderComponent.Root
      className="slider-root"
      value={value}
      onValueChange={onChange}
      min={min}
      max={max}
    >
      <SliderComponent.Track className="slider-track">
        <SliderComponent.Range className="slider-range" />
      </SliderComponent.Track>
      <SliderComponent.Thumb className="slider-thumb" />
    </SliderComponent.Root>
  );
}

export default Slider;
