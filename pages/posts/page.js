import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import RelatedComp from "../../components/_child/related-comp";
const Page = () => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-14">
            Man City 2-1 Borussia Dortmund: Erling Haaland helps Pep Guardiola's
            side come from behind to win late on
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Pep Guardiola's side had looked to be heading for Champions League
            defeat when Jude Bellingham headed Dortmund in front early in the
            second half but John Stones levelled it late on from distance before
            Haaland had the final say with his measured volley from Joao
            Cancelo's inviting outside-of-the-boot cross.
          </p>
          <div className="py-10">
            <Image src={"/images/ball.jpg"} width={900} height={600}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
            <p>
              Man City had been below par for much of the match - Stones' shot
              in the 80th minute was their first on target all evening - but
              with Haaland in the team there is always that threat. The victory
              keeps them top of Group G with maximum points from their two
              matches.
            </p>
          </div>
        </div>
        <div>
          <RelatedComp />
        </div>
      </section>
    </Format>
  );
};

export default Page;
