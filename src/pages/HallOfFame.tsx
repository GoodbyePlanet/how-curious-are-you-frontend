interface Finisher {
  place: number;
  name: string;
  socialNetworkUrl: string;
}

function HallOfFame(): JSX.Element {
  const finishersList = [
    { place: 1, name: "Pero", socialNetworkUrl: "https://pero.com/" },
    { place: 2, name: "Jovan", socialNetworkUrl: "https://jovan.com/" },
    { place: 3, name: "Jovica", socialNetworkUrl: "https://jovica.com/" },
  ] as Finisher[];

  return (
    <div>
      <h3>HALL OF FAME</h3>
      {finishersList.map((finisher) => (
        <div key={finisher.place}>{finisher.place}. <a href={finisher.socialNetworkUrl}>{finisher.name}</a> </div>
      ))}
    </div>
  );
}

export default HallOfFame;
