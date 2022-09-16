<template>
  <v-app>
    <LayoutTopNavigation />
    <v-main>
      <PagesIndexHeroArea />
      <v-container>
        <v-row>
          <v-col>
            <v-card color="primary">
              <v-row>
                <v-col> test </v-col>
                <v-col> test </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card>test</v-card>
          </v-col>
          <v-col>
            <v-card>test2</v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-actions>
                <v-btn>test</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card>test2</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
