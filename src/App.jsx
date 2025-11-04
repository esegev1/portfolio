const App = () => {
  const experience = [
    {
      id: 1,
      name: 'Google LLC',
      position: 'Product Lead, Payment and Deal Systems',
      highlights: 'loreum ipsum and all that jazz',
      startDate: '11/18/2018',
      endDate: '10/26/2025',
      logo: 'google.png',
    }
  ];

  const expSection = experience.map((company) =>
    <div>
      <img src={'/images/' + company.logo} />
      <h3>{company.name}</h3>
      <p>
        <span>{company.position}</span><span>{company.startDate}</span> <span>{company.endDate}</span>
      </p>
      <p>{company.highlights}</p>

    </div>
  );

  return (
    <>
      {expSection}
    </>

  );
};

export default App;