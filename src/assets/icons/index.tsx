import { FC } from "react";
import Files from "./files.svg";
import Search from "./search.svg";
import Linkedin from "./linkedin.svg";
import Account from "./account.svg";
import Setting from "./setting.svg";
import Comment from "./comment.svg";
import Remote from "./remote.svg";
import SourceControl from "./source-control.svg";
import Github from "./github.svg";
import ChevronRight from "./chevron-right.svg";
import Close from "./close.svg";
import Error from "./error.svg";
import Pass from "./pass.svg";
import Sync from "./sync.svg";
import Warning from "./warning.svg";
import Info from "./info.svg";
import Mail from "./mail.svg";

const icons = {
  files: Files,
  search: Search,
  linkedin: Linkedin,
  account: Account,
  setting: Setting,
  comment: Comment,
  remote: Remote,
  "source-control": SourceControl,
  github: Github,
  "chevron-right": ChevronRight,
  close: Close,
  error: Error,
  pass: Pass,
  sync: Sync,
  warning: Warning,
  info: Info,
  mail: Mail
};

type IconProps = {
  name: keyof typeof icons;
} & React.SVGProps<SVGSVGElement>;

const Icons: FC<IconProps> = ({ name, ...props }) => {
  const Icon = icons[name];

  return <Icon {...props} />;
};

export default Icons;
