import styled from 'styled-components';

export default function ImageWrapper({
  src,
  style,
  alt,
  id,
  className,
  onClick,
}) {
  return (
    <Wrapper>
      <ImageObj
        id={id}
        src={src}
        style={style}
        alt={`KGHYPE-${alt}`}
        className={className}
        onClick={onClick}
      />
    </Wrapper>
  );
}

const ImageObj = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
`;
