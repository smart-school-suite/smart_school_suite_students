import { Skeleton } from "moti/skeleton";
import { View } from "react-native";
import { utilityStyles } from "../../styles/utility";
function ProfileSkeleton() {
  return (
    <>
      <View style={[utilityStyles.flexCol, utilityStyles.gXl]}>
        <View
          style={[
            utilityStyles.flexCol,
            utilityStyles.justifyCenter,
            utilityStyles.alignCenter,
            utilityStyles.gSm,
          ]}
        >
          <Skeleton
            colorMode={"light"}
            radius="round"
            height={150}
            width={150}
          />
          <View
            style={[
              utilityStyles.flexCol,
              utilityStyles.justifyCenter,
              utilityStyles.alignCenter,
              utilityStyles.gSm,
            ]}
          >
            <Skeleton colorMode={"light"} width={200} height={10} />
            <Skeleton colorMode={"light"} width={225} height={10} />
          </View>
        </View>
        <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
          <Skeleton colorMode={"light"} width={200} height={10} />
          <Skeleton colorMode={"light"} width={"100%"} height={325} />
        </View>
        <View style={[utilityStyles.flexCol, utilityStyles.gSm]}>
          <Skeleton colorMode={"light"} width={200} height={10} />
          <Skeleton colorMode={"light"} width={"100%"} height={325} />
        </View>
      </View>
    </>
  );
}
export default ProfileSkeleton;
