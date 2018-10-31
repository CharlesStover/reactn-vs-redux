The following statistics were deemed unimportant for the main README and are listed here for archival.

## Foundation Testing

### Development Size in Bytes

The development size in bytes measures how much disk space is required to implement one of these global state management packages.
This size was determined prior to the adjustments listed under the Methodology section above and therefore only takes into account _dependencies_.
This removes white-space bias, however negligible, and focuses solely on the size of ReactN and Redux.

The baseline, `create-react-app`, is 116,852,648 bytes. The following statistics _include_ `create-react-app`'s files.

| Application | Size        | Size Diff.       | CRA Diff.        |
| ----------- | ----------- | ---------------- | ---------------- |
| reactn      | 117,111,833 | -272,831 (-0.2%) | +259,185 (+0.2%) |
| redux       | 117,384,664 | +272,831 (+0.2%) | +532,016 (+0.5%) |

Comparisons were determined using `ls -r | measure -s Length` in Windows PowerShell.

Using ReactN will increase your development disc usage by 0.2%.
Using ReactN over Redux will decrease your development disc usage by 0.2%.

Using Redux will increase your development disc usage by 0.5%.
Using Redux over ReactN will increase your development disc usage by 0.2%.

### Development Memory Size

The development memory size is how much memory is required to run a development build of your application.

| Application | Code     | Strings  | JS Arrays | Typed Arrays | System Objects | Total (KB) | Total (MB) | Total Diff.     |
| ----------- | -------- | -------- | --------- | ------------ | -------------- | ---------- | ---------- | --------------- |
| reactn      | 1,116 KB | 1,745 KB | 262 KB    | 2 KB         | 1,904 KB       | 15,056 KB  | 14.7 MB    | -452 KB (-2.9%) |
| redux       | 1,140 KB | 1,882 KB | 270 KB    | 1 KB         | 2,308 KB       | 15,508 KB  | 15.1 MB    | +452 KB (+3.0%) |

Comparisons were determined using the Memory development tool built into Chrome 68.0.3440.75 (Official Build) (64-bit) after running the application using `yarn start`.

Using ReactN over Redux will decrease your additional development memory by 2.9%.
Using Redux over ReactN will increase your additional development memory by 3.0%.

### Production Memory Size

The production memory size is how much memory is required to run a production build of your application.

| Application | Code   | Strings  | JS Arrays | Typed Arrays | System Objects | Total (KB) | Total (MB) | Total Diff.     |
| ----------- | ------ | -------- | --------- | ------------ | -------------- | ---------- | ---------- | --------------- |
| reactn      | 366 KB | 176 KB   | 13 KB     | 1 KB         | 1,121 KB       | 3,161 KB   | 3.1 MB     | -199 KB (-5.9%) |
| redux       | 389 KB | 183 KB   | 13 KB     | 1 KB         | 1,211 KB       | 3,360 KB   | 3.3 MB     | +199 KB (+6.3%) |

Comparisons were determined using the Memory development tool built into Chrome 68.0.3440.75 (Official Build) (64-bit) after building the application using `yarn build`.

Converting from Redux to ReactN will decrease your additional production memory by 5.9%.

Converting from ReactN to Redux will increase your padditional roduction memory by 6.3%.

## Application Testing

### Development Memory Size

The development memory size is how much memory is required to run a development build of your application.

| Application | Code     | Strings  | JS Arrays | Typed Arrays | System Objects | Total (KB) | Total (MB) | Total Diff.     |
| ----------- | -------- | -------- | --------- | ------------ | -------------- | ---------- | ---------- | --------------- |
| reactn      | X KB | X KB | X KB    | X KB         | X KB       | X KB  | X MB    | -X KB (-X.X%) |
| redux       | X KB | X KB | X KB    | X KB         | X KB       | X KB  | X MB    | +X KB (+X.X%) |

Comparisons were determined using the Memory development tool built into Chrome 68.0.3440.75 (Official Build) (64-bit) after running the application using `yarn start`.

Using ReactN over Redux will decrease your development memory by X.X%.
Using Redux over ReactN will increase your development memory by X.X%.
