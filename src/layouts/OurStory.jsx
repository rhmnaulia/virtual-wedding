import CoupleImage from "../../public/static/images/berdua10.JPG";
import Image from "next/image";

function OurStory() {
  return (
    <div className="flex justify-center items-center py-16 flex-col our-story-container">
      <h1 className="text-4xl  font-typography mb-10 font-semibold">
        Our Story
      </h1>

      <div className="mb-8 h-72 w-72 relative">
        <Image
          src={CoupleImage}
          alt="OurPict"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="story flex flex-col w-10/12 lg:w-3/4 text-center text-sm md:text-base font-serif text-black ">
        <p>Berawal dari seorang teman, kami saling berkenalan.</p>
        <p>Malam demi malam telah saling kirim ratusan pesan.</p>
        <p className="mb-1 pb-3 ">
          Bukan jadi halangan walaupun terjarak ribuan kilometer dan pulau yang
          berjauhan.
        </p>

        {/* second paragraph */}

        <p>
          Hingga pada suatu titik kami memantapkan hati untuk saling memantaskan
          diri.
        </p>
        <p>
          Terujar doa yang tak henti agar kami yakin untuk saling melengkapi.
        </p>
        <p>Allah sungguh sangat baik hati.</p>
        <p>Menuntun hati kami.</p>
        <p className="mb-1 pb-3 ">
          Yang awalnya penuh teka teki, hingga terlihat jelas jalan yang harus
          kami lalui.
        </p>

        {/* third paragraph */}

        <p>Dan ketika khitbah terucap di depan kedua orang tua,</p>
        <p>Raut wajah kami terpancar jelas rasa haru bercampur bahagia.</p>
        <p>Terasa begitu sempurna, Allah menjawab semua doa.</p>
        <p className="mb-1 pb-3 ">
          Sujud syukur kami berdua, untuk semua rasa kantuk yang kami korbankan
          di setiap malam pukul tiga.
        </p>

        {/* fourth paragraph */}

        <p>Begitu singkat proses kami sampai begitu dekat.</p>
        <p>Namun ketika jodoh sudah Allah takdirkan untuk mendekat,</p>
        <p className="mb-1 pb-3 ">
          takkan pernah datang lebih cepat walau sesaat, takkan pernah datang
          terlambat walau harus seabad.
        </p>

        {/* fifth paragraph */}

        <p>
          Terimakasih telah saling sabar menunggu hingga hari kita bertemu dan
          terimakasih untuk saling memilih tanpa ragu.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
