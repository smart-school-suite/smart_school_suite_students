import { Skeleton } from "moti/skeleton";
import { ScrollView, View } from "react-native";
import { utilityStyles } from "../../styles/utility";
export const CourseScreenTabsSkeleton = () => {
   return  (
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

export const CourseListSkeleteon = () => {
   return (
     <>
           <ScrollView>
        <View style={[utilityStyles.flexCol, utilityStyles.gMd]}>
          {[...Array(10)].map((_items, index) => (
            <View
              style={[utilityStyles.flexCol, utilityStyles.gMd]}
              key={index}
            >
              <Skeleton colorMode={"light"} width={100} height={10} />
              <Skeleton colorMode={"light"} width={"100%"} height={175} />
            </View>
          ))}
        </View>
      </ScrollView>
     </>
   )
}
