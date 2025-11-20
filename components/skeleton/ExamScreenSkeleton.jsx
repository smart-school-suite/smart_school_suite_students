import { Skeleton } from "moti/skeleton";
import { ScrollView, View } from "react-native";
import { utilityStyles } from "../../styles/utility";

export const ExamScreenTabSkeleton = () => {
     return (
        <>
                   <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  columnGap: 12,
                }}
              >
                {[...Array(10)].map((_items, index) => (
                  <Skeleton colorMode={"light"} width={150} height={45} key={index} />
                ))}
              </ScrollView>
        </>
     )
}
export const ExamListSkeleton = () => {
     return (
         <>
          {
             [...Array(3)].map((_item, index) => (
                 <View style={[utilityStyles.flexCol, utilityStyles.gSm]} key={index}>
              <Skeleton colorMode={"light"} width={100} height={10} />
              <Skeleton colorMode={"light"} width={"100%"} height={150} />
              <Skeleton colorMode={"light"} width={"100%"} height={250} />
            </View>
             ))
          }
         </>
     )
}