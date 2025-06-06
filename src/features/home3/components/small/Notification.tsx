import Image from "next/image";
import notificationImages from "../../data/notification.json";

const Notification = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center gap-5 rounded-2xl border border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur`}
    >
      <Image
        src={"/home3-assets/images/notification/image-1.png"}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <p className="mb-1 text-base font-semibold">{title}</p>

        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex h-6 w-6 overflow-hidden rounded-full border-2 border-n-12"
              >
                <Image
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
