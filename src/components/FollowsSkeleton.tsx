import ContentLoader from "react-content-loader"
import { FC } from "react"

const FollowsSkeleton: FC  = () => (
  <ContentLoader height="500"     backgroundColor="#b3b3b3"
  foregroundColor="#f5f5f5"
width="300" viewBox="0 0 265 230" >
    <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
  </ContentLoader>
)

export default FollowsSkeleton