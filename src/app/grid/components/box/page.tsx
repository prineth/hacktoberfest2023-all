interface MyComponentProps {
    id: number;
  }

export default function Box(props: MyComponentProps) {
    return (
        <div key={props.id} className="bg-gray-200 rounded-md hover:bg-slate-400 h-16 flex ">
            <p className="p-1 text-xs sm:text-sm">{props.id + 1}</p>
        </div>
    );
}
